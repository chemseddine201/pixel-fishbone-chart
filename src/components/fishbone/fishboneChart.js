import React, { Component } from 'react'
import Grid from '../layout/grid'
import './fishboneChart.css'
import {FishboneDrawer} from './FishboneDrawer'

const INITIAL_STATE = {data: undefined, index: 0}

export default class FishboneChart extends Component {
    constructor(props) {
        super(props)
        this.state = INITIAL_STATE
    }

    componentWillMount() { 
        const data = this.props.data
        if (data) {
            this.setState({data: data})
        }        
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.data !== nextProps.data) {
            const data = nextProps.data
            this.setState({data: data})
        }
    }

    componentDidMount() {
        this.initFishbone();
        window.addEventListener('resize', this.initFishbone);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.initFishbone);
      }

    render() {
        if (!this.state.data) {
            return <React.Fragment>No Data Received</React.Fragment>
        }

        return (
            <Grid cols={this.props.cols}>
                <div className="fishboneChart">
                    {this.getCauses()}
                </div>
            </Grid >
        )
    }

    initFishbone() {
        const fishbone = new FishboneDrawer();
        fishbone.init();
    }

    getTopCauses(children) {

        const middle = parseInt(children.length / 2)
        const causesArray = children.slice(0, middle)

        const color = this.getColor(this.state.index)

        const topCauses = causesArray.map((cause, index) => {
            return (
                <div key={`top_causes_${cause.name}_${index}`} className="causeContent">
                    <div className={`cause top ${color}_ ${color}Border`}>
                        {cause.name}
                    </div>
                    <div className="causeAndLine top-items">
                        {this.getSubCauses(cause.children)}
                        <div className={`diagonalLine ${color}TopBottom`}/>
                    </div>
                </div>
            )
        })

        return (<div className="causesGroup">{topCauses}</div>)
    }

    //this is the 
    getSubCauses(subCauses) {
        const subCausesItems = subCauses.map((subCause, index) => {
            return (<div 
                    className="cuseContainer" 
                    key={`root_causes_${subCause.name}_${index}`}
                >
                <span className={`cause top gray_ blueBorder lineEffect bold`}>{subCause.name}</span>
                <div className="blueBorder absoluteBorder" ></div>
                <div className='subcauses-list-container'>
                    <ul className='subcauses-list'>
                        {
                        Array.isArray(subCause.children) ?  subCause.children.map((_subCause, index) => {
                                return <li key={`sub_causes_${index}_${_subCause.name}`}>{_subCause.name}</li>
                            }) : null
                        }
                    </ul>
                </div>
                
            </div>)
        })
        return (<div className="rootCauses">{subCausesItems}</div>)
    }

    recursiveCauses(causes) {
        const renderSubCauses = (subCauses, depth = 0) => {
            return subCauses.map((subCause, index) => {
                return (
                    <div 
                    key={`root_causes_${subCause.name}_${index}`} 
                    className={`rootCauses depth-${depth}`}
                    >
                    <div className="cause-name">{subCause.name}</div>
                    {subCause.children && subCause.children.length > 0 && (
                        <div className="cause-children">
                        {renderSubCauses(subCause.children, depth + 1)}
                        </div>
                    )}
                    </div>
                )
        })
     }
    }
    

    getBottomCauses(children) {

        const middle = parseInt(children.length / 2)
        const causesArray = children.slice(middle)

        const color = this.getColor(this.state.index)

        const bottomCauses = causesArray.map((cause, index) => {
            return (
                <div key={`bottom_causes_${cause.name}_${index}`} className="causeContent">
                    <div className="causeAndLine bottom-items">
                        {this.getSubCauses(cause.children)}
                        <div className={`diagonalLine ${color}BottomTop`}/>
                    </div>
                    <div className={`cause bottom ${color}_ ${color}Border`}>
                        {cause.name}
                    </div>
                </div>
            )
        })

        return (<div className="causesGroup">{bottomCauses}</div>)
    }

    getCauses() {
        const children = this.state.data.children
        const color = this.getColor(this.state.index)
        //
        return (
            <div className="causes">
                {this.getTopCauses(children)}
                <div className={`lineEffect ${color}Border`} >
                    {this.getEffect()}
                </div>
                {this.getBottomCauses(children)}
            </div>
        )
    }

    getEffect() {        
        const color = this.getColor(this.state.index)
        return (
            <div className={`effect left ${color}_ ${color}Border`} id="effetTitleContainer">
                <div className={`effectValue`}>
                    {this.state.data.title}
                </div>
            </div>
        )
    }

    /* selectDataset(index) {
        const data = this.props.data
        if(data) {
            const effect = Object.keys(data)[index]            
            this.setState({causes: data[effect], effect, index})
        }
    } */

    /* getLegend() {        
        const labels = Object.keys(this.props.data)

        if(labels.length <= 1) {
            return
        }

        const labelsDivs = labels.map((label, index) => {
            const labelClass = index === this.state.index ? 'label_' : 'labelLineThrough'
            const color = this.getColor(index)
            return (
                <div key={`labels_${label}_${index}`} className="legendLabel" onClick={() => this.selectDataset(index)}>
                    <div className={`labelSquare legend all ${color}_dark ${color}Border`} />
                    <div className={labelClass}>{label}</div>
                </div>
            )
        })

        return (
            <div className="legend">
                {labelsDivs}
            </div>
        )
    } */

    getColor(index) {
        const colors = [
            'blue',
            'pink',
            'gray',
            'green',            
            'blue_two',            
            'orange',
            'black',            
            'purple'
        ]
    
        if (index >= colors.length) {
            index -= colors.length
        }

        return colors[index]
    }
}
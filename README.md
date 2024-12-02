# fishbone-chart
> 
Get a fishbone chart with sub causes for reactjs.


## Install

```bash
npm install --save pixel-fishbone-chart
```

## Usage

```jsx 
import React, { Component } from 'react'

import FishboneChart from 'pixel-fishbone-chart'

class Example extends Component {
  render() {

    const data = {
      title: 'Problem Title',
      children: [
        {
          name: 'title1',
          children: [
            {
              name: 'sub title 1',
              children: [
                {
                  name: 'name 1',
                },
                {
                  name: 'name 2',
                }, 
                {
                  name: 'name 3'
                }
              ]
            },
             {
              name: 'sub title 2',
              children: [
                {
                  name: 'name 2-1',
                },
                {
                  name: 'name 2-2',
                }, 
                {
                  name: 'name 2-3'
                }
              ]
            },
          ]
        },
      ]
    };

    return (
      <div style={{ width: 1100, margin: "15px auto" }}>
        <FishboneChart data={data} />
      </div>
    )
  }
}
```

## License

MIT ©

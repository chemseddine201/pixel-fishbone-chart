import React, { Component } from 'react'

import FishboneChart from 'pixel-fishbone-chart'

export default class App extends Component {

  render() {

    const data = {
      title: 'Inadequate Knowledge Transfer (Inadequate Instructor Qualifications)',
      children: [
        {
          name: 'Immediate Causes - Actions', //main Causes
          children: [
            {
              name: 'Following Procedures with another long description if needed',//sub causes
              children: [
                {
                  name: 'Violation by individual',//sub sub causes
                },
                {
                  name: 'Operation of equipment without authority',
                }, 
                {
                  name: 'Improper position or posture for the task'
                }
              ]
            },
            {
              name: 'Following Procedures',//sub causes
              children: [
                {
                  name: 'Violation by individual',//sub sub causes
                },
                {
                  name: 'Operation of equipment without authority',
                }, 
                {
                  name: 'Improper position or posture for the task'
                }
              ]
            }, 
            /* {
              name: 'Following Procedures',//sub causes
              children: [
                {
                  name: 'Violation by individual',//sub sub causes
                },
                {
                  name: 'Operation of equipment without authority',
                }, 
                {
                  name: 'Improper position or posture for the task'
                }
              ]
            },
            {
              name: 'Following Procedures',//sub causes
              children: [
                {
                  name: 'Violation by individual',//sub sub causes
                },
                {
                  name: 'Operation of equipment without authority',
                }, 
                {
                  name: 'Improper position or posture for the task'
                }
              ]
            },
            {
              name: 'Following Procedures',//sub causes
              children: [
                {
                  name: 'Violation by individual',//sub sub causes
                },
                {
                  name: 'Operation of equipment without authority',
                }, 
                {
                  name: 'Improper position or posture for the task'
                }
              ]
            },
            {
              name: 'Use of Tools or Equipment',//sub causes
              children: [
                {
                  name: 'Improper use of equipment',//sub sub causes
                },
                {
                  name: 'Improper placement of tools, equipment, or materials',
                }, 
                {
                  name: 'Servicing of equipment in operation'
                }
              ]
            },  
            {
              name: 'Use of Protective Methods',//sub causes
              children: [
                {
                  name: 'Personal protective equipment not used',//sub sub causes
                },
                {
                  name: 'Disabled guards, warning systems, or safety devices',
                }, 
                {
                  name: 'Personal protective equipment not available'
                },
                {
                  name: 'Personal protective equipment not used',//sub sub causes
                },
                {
                  name: 'Disabled guards, warning systems, or safety devices',
                }, 
                {
                  name: 'Personal protective equipment not available'
                }
              ]
            }
            ,  
            {
              name: 'Use of Protective Methods',//sub causes
              children: [
                {
                  name: 'Personal protective equipment not used',//sub sub causes
                },
                {
                  name: 'Disabled guards, warning systems, or safety devices',
                }, 
                {
                  name: 'Personal protective equipment not available'
                },
                {
                  name: 'Personal protective equipment not used',//sub sub causes
                },
                {
                  name: 'Disabled guards, warning systems, or safety devices',
                }, 
                {
                  name: 'Personal protective equipment not available'
                }
              ]
            }
            ,  
            {
              name: 'Use of Protective Methods',//sub causes
              children: [
                {
                  name: 'Personal protective equipment not used',//sub sub causes
                },
                {
                  name: 'Disabled guards, warning systems, or safety devices',
                }, 
                {
                  name: 'Personal protective equipment not available'
                },
                {
                  name: 'Personal protective equipment not used',//sub sub causes
                },
                {
                  name: 'Disabled guards, warning systems, or safety devices',
                }, 
                {
                  name: 'Personal protective equipment not available'
                }
              ]
            }
            ,  
            {
              name: 'Use of Protective Methods',//sub causes
              children: [
                {
                  name: 'Personal protective equipment not used',//sub sub causes
                },
                {
                  name: 'Disabled guards, warning systems, or safety devices',
                }, 
                {
                  name: 'Personal protective equipment not available'
                },
                {
                  name: 'Personal protective equipment not used',//sub sub causes
                },
                {
                  name: 'Disabled guards, warning systems, or safety devices',
                }, 
                {
                  name: 'Personal protective equipment not available'
                }
              ]
            } */
          ]
        },
        {
          name: 'Immediate Causes - Conditions',
          children: [
            {
              name: 'Protective Systems',
              children:[
                {
                  name:'Inadequate guards or protective devices'
                },
                {
                  name:'Defective guards or protective devices'
                }, 
                {
                  name:'Inadequate isolation of process or equipment'
                }
              ]
            }
          ]
        },
        {
          name: 'System Causes - Personal Factors',
          children: [
            {
              name: 'Physical Condition',
              children: [
                {
                  name: 'Diminished Performance (Due to Temperature Extremes)'
                }
              ]
            }
          ]
        },
        {
          name: 'System Causes - Job Factors',
          children: [
            {
              name: 'Training / Knowledge Transfer',
              children:[
                {
                  name: 'Inadequate Knowledge Transfer (Inadequate Instructor Qualifications)',
                },
                {
                  name: 'Inadequate Recall of Training Material (Training Not Reinforced on the Job)',
                },
                {
                  name: 'Inadequate Training Effort (Inadequate Training Goals / Objectives)',
                },
                {
                  name: 'Inadequate Knowledge Transfer (Inadequate Instructor Qualifications)',
                },
                {
                  name: 'Inadequate Recall of Training Material (Training Not Reinforced on the Job)',
                },
              ]
            },
           {
              name: 'Management / Supervision / Employee Leadership',
              children:[
                {
                  name: 'Conflicting Roles / Responsibilities (Unclear Assignment of Responsibility)'
                },
                {
                  name: 'Inadequate Leadership (Inadequate or Incorrect Performance Feedback)'
                }
              ]
            },
            {
              name: 'Work Planning',
              children:[
                {
                  name: 'Inadequate Preventive Maintenance (Assessment of Needs)'
                },
              ]
            }, 
            {
              name: 'Purchasing, Material Handling & Material Control',
              children:[
                {
                  name: 'Incorrect Item Received (Inadequate Specifications to Vendor)'
                },
                {
                  name: 'Incorrect Item Received (Unauthorized Substitution)'
                },
                {
                  name: 'Inadequate Material Packaging'
                },
              ]
            },
            {
              name: 'Tools & Equipment',
              children:[
                {
                  name: 'Inadequate Human Factors / Ergonomics Considerations'
                },
                {
                  name: 'Inadequate Availability'
                },
                {
                  name: 'Inadequate Removal / Replacement of Unsuitable Items'
                },
              ]
            },
          ]
        },
      ]
    }

    return (
      <div style={{ width: 1100, margin: "15px auto" }}>
        <FishboneChart data={data} />
      </div>
    )
  }
}

import React, { Component } from 'react'
import { connect } from 'react-redux';

class AgeIncrement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.LoadFunction();
    }

  render() {
    return (
      <div>
            Age : {this.props.age} <br />
            <button onClick={this.props.AgeInc}>INC</button>
            <button onClick={this.props.AgeDec}>DEC</button>
            <hr />
            <h3>{this.props.getLoad}</h3>
            <h3>History</h3>
            <ul>
                {this.props.history.map(el => (
                    <li key={el.id} onClick={() => this.props.DelItem(el.id)}>
                        {el.age}
                    </li>
                ))}
            </ul>

            <ul>
                <button onClick={() => this.props.ASC(this.props.loadList)} >ASC</button>
                <button onClick={() => this.props.DSC(this.props.loadList)} >DSC</button>
                {this.props.loadList.map(LL =>
                (
                    <span>
                            <li key={Math.random()-1}>{LL.name} - {LL.name}</li>
                    </span>
                   
                ))}            
            </ul>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AgeInc: () => dispatch({ type: "INC", value: 1 }),
        AgeDec: () => dispatch({ type: "DEC", value: 1 }),
        DelItem: (id) => dispatch({ type: "DEL", item: id }),
        LoadFunction: () => dispatch({ type: "LOAD", load: 'data_added' }),
        LoadList : () => dispatch({type: "LIST"}),
        ASC: (arr) => {
                        arr.sort(function (a, b) {
                            var nameA, nameB;
                                  nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                                if (nameA < nameB) //sort string ascending
                                    return -1
                                if (nameA > nameB)
                                    return 1
                                return 0 //default return value (no sorting)
                            
                        });
                        dispatch({type: "ASC", arr_list:arr});
                      },

            DSC: (arr) => {
            arr.sort(function (a, b) {
                var nameA, nameB;
                nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)

            });
                dispatch({ type: "DSC", arr_list: arr });
        }
    }
    
}
const mapStateToProps = state => {
    console.log("all state => ", state.list);
   
    console.log("all state => ", state.list);
    return {
        age: state.age,
        history: state.history,
        getLoad: state.getLoadedData,
        loadList: state.list
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AgeIncrement);

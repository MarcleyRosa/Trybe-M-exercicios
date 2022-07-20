import { Component } from "react";

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image } = this.props.name

        return (<div className="pokedex">
            <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
            </div>
            <aside>
            <img src={image} alt="" />
            </aside>
           </div>)
    }
}

export default Pokemon
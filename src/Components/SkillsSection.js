import React from 'react'
import SkillCard from './SkillCard'
import Javascript from "../Images/logos/javascript.png";
import ReactLogo from "../Images/logos/react.png";
import Firebase from "../Images/logos/firebase.png";
import Node from "../Images/logos/node.png";
import Mongodb from "../Images/logos/mongodb.png";
import Express from "../Images/logos/express.png";
import Next from "../Images/logos/next.png";
import Native from "../Images/logos/native.png";
import Mongoose from "../Images/logos/mongoose.png";
import Jwt from "../Images/logos/jwt.png";
import Redux from "../Images/logos/redux.png";
import Socket from "../Images/logos/socket.jpg";
import FamiliarCard from './FamiliarCard';


const knowData = [
  { id: 1, image: Javascript },
  { id: 2, image: ReactLogo },
  { id: 3, image: Firebase },
  { id: 4, image: Node },
  { id: 5, image: Mongodb },
  { id: 6, image: Express },
];
const familiarData = [
    { id: 1, image: Next},
    { id: 2, image: Mongoose},
    { id: 3, image: Native},
    { id: 4, image: Jwt},
    { id: 5, image: Redux},
    { id: 6, image: Socket},
]
const SkillsSection = () => {
    return (
        <div className="SkillsSection">
            <h4>All I Know So Far.....</h4>
            <div className="know-container">
                {
                    knowData.map((data) => <SkillCard key={data.id} data={data} />)
                }
            </div>
            <h4>Familiar</h4>
            <div className="familiar-container">
                {
                    familiarData.map((data) => <FamiliarCard key={data.id} data={data} />)
                }
            </div>
        </div>
    )
}

export default SkillsSection

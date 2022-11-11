import React from "react";
import FeatureBox from './Featurebox';
import fpicture1 from '../Pictures/1.svg';
import fpicture2 from '../Pictures/2.svg';
import fpicture3 from '../Pictures/3.svg';
import fpicture4 from '../Pictures/4.svg';

function Feature() {
    return(
        <div id="features">
            <h1>FEATURES</h1>
            <div className='a-container'>
                <FeatureBox picture={fpicture1} title="Weighlifting" />
                <FeatureBox picture={fpicture2} title="Specific Muscle" />
                <FeatureBox picture={fpicture3} title="Flex your muscle" />
                <FeatureBox picture={fpicture4} title="Cardio Exercise" />
            </div>
        </div>
    )
}

export default Feature;
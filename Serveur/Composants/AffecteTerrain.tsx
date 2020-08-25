import React from "react";
import {Select} from '@rmwc/select';

export class AffecteTerrain extends React.Component {
    render() {
        return (
            <Select label="Terrain" outlined options={["1", "2", "3", "4", "5"]} />
        );
    }
}

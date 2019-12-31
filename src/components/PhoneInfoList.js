import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        datat: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate noe defined')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map( info => (
            <PhoneInfo 
                key={info.id} info={info}
                info={info}
                onRemove={onRemove}
                onUpdate={onUpdate}    
            />
        ));

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
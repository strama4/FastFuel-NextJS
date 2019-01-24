import React from 'react';
import { withRouter } from 'next/router';

const index = () => {
    return (
        <div>
            Hello!
        </div>
    );
};

export default withRouter(index);
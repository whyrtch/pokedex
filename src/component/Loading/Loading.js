import React from 'react';

const Loading = () => {
    return (
        <div className="container-fluid">
            <div className="text-center py-5 my-5">
                <div className="spinner-border" style={{width: '3rem',height: '3rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}

export default Loading;

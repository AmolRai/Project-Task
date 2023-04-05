import React from 'react'

function Address(props) {

    const addressStyles = {
        height: props.receiveClicked && "5rem",
        border: props.receiveClicked && "none"
    }

    return (
        <div className="address" style={addressStyles}>
            <h1>25BKJNKNLJL58fjkdhfk26dnfds15</h1>
            {!props.isClicked && <button>Copy</button>}
        </div>
    )
}

export default Address

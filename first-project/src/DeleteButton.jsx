import React from 'react';

function DeleteButton({ onClick }) {
    return (
        <button 
            onClick={onClick} 
            style={styles.button}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.hover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
            X
        </button>
    );
}

const styles = {
    button: {
        marginTop: '10px',
        padding: '5px 10px',
        borderRadius: '5px',
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid #ff4d4d',
        cursor: 'pointer',
    },
    hover: {
        backgroundColor: '#ff4d4d',
    }
};

export default DeleteButton;

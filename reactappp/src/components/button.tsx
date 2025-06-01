import React from 'react'

function Button({ title, onClick }: { title: string, onClick: () => void }) {
    return (
        <div style={{ width: 'auto', height: '30px', backgroundColor: 'blue', color: 'white', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={onClick} style={{ width: '100%', height: '100%', backgroundColor: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}>{title}</button>
        </div>
    )
}

export default Button

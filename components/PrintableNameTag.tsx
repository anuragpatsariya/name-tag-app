import React from 'react';
import { Nametag } from '../types/nametag';

interface PrintableNameTagProps {
    nametag: Nametag;
}

const PrintableNameTag: React.FC<PrintableNameTagProps> = ({ nametag }) => {
    return (
        <div className="printable-nametag" style={{ 
            padding: '20px',
            border: '1px solid #000',
            width: '300px',
            textAlign: 'center',
            margin: '20px auto'
        }}>
            {nametag.image && (
                <img 
                    src={nametag.image} 
                    alt={nametag.name} 
                    style={{ 
                        width: '100px', 
                        height: '100px', 
                        borderRadius: '50%',
                        marginBottom: '10px'
                    }} 
                />
            )}
            <h2 style={{ fontSize: '24px', margin: '10px 0' }}>{nametag.name}</h2>
            <p style={{ fontSize: '18px', margin: '5px 0' }}>{nametag.role}</p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>Host: {nametag.host}</p>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>
                {nametag.date_of_visit.toLocaleDateString()}
            </p>
        </div>
    );
};

export default PrintableNameTag;
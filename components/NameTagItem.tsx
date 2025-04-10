import React from 'react';
import { Nametag } from '../types/nametag';

interface NameTagItemProps {
    nametag: Nametag;
}

const NameTagItem: React.FC<NameTagItemProps> = ({ nametag }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={nametag.image || undefined} alt={nametag.name} className="w-24 h-24 rounded-full" />
            <h2 className="text-2xl font-bold">{nametag.name}</h2>
            <p className="text-sm text-gray-500">{nametag.role}</p>
            <p className="text-sm text-gray-500">{nametag.date_of_visit.toLocaleDateString()}</p>
            <p className="text-sm text-gray-500">{nametag.host}</p>
        </div>
    );
};

export default NameTagItem;
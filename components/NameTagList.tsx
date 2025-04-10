import React from 'react';
import { Nametag } from '../types/nametag';
import NameTagItem from './NameTagItem';

interface NameTagListProps {
    nametags: Nametag[];
}

const NameTagList: React.FC<NameTagListProps> = ({ nametags }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            {nametags.map((nametag) => <NameTagItem key={nametag.name} nametag={nametag} />)}
        </div>
    );
};

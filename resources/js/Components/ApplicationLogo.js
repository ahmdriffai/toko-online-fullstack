import React from 'react';
import { TbBuildingStore } from 'react-icons/tb';

export default function ApplicationLogo({ className }) {
    return (
        <div className="flex">
            <TbBuildingStore size={20} className="text-green-700"/>
            <span className="font-semibold ml-2">Toko TCD</span>
        </div>
    );
}

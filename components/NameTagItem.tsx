import React from 'react';
import { createRoot } from 'react-dom/client';
import { Nametag } from '../types/nametag';
import PrintableNameTag from './PrintableNameTag';

interface NameTagItemProps {
    nametag: Nametag;
}

const NameTagItem: React.FC<NameTagItemProps> = ({ nametag }) => {
    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(`
                <html>
                    <head>
                        <title>Print Name Tag</title>
                        <style>
                            @media print {
                                body { -webkit-print-color-adjust: exact; }
                            }
                        </style>
                    </head>
                    <body>
                        <div id="print-content"></div>
                        <script>
                            window.onload = function() {
                                window.print();
                                window.onafterprint = function() {
                                    window.close();
                                };
                            };
                        </script>
                    </body>
                </html>
            `);
            
            const printContent = printWindow.document.getElementById('print-content');
            if (printContent) {
                const root = createRoot(printContent);
                root.render(<PrintableNameTag nametag={nametag} />);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm">
            <img src={nametag.image || undefined} alt={nametag.name} className="w-24 h-24 rounded-full" />
            <h2 className="text-2xl font-bold mt-2">{nametag.name}</h2>
            <p className="text-sm text-gray-500">{nametag.role}</p>
            <p className="text-sm text-gray-500">{nametag.date_of_visit.toLocaleDateString()}</p>
            <p className="text-sm text-gray-500">{nametag.host}</p>
            <button 
                onClick={handlePrint}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Print Name Tag
            </button>
        </div>
    );
};

export default NameTagItem;
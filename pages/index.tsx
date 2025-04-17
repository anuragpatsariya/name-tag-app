import React, { useState } from 'react';
import { Nametag } from '../types/nametag.d';
import NameTagList from '../components/NameTagList';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
    const [nametags, setNametags] = useState<Nametag[]>( [] );
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [host, setHost] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const addNameTag = (name: string) => {
        const newNametag: Nametag = {
            name: name,
            role: role,
            date_of_visit: new Date(),
            host: host,
            image: image ? URL.createObjectURL(image) : null
        };
        setNametags([...nametags, newNametag]);
        setName('');
        setRole('');
        setHost('');
        setImage(null);
    };

    const handleAddNameTag = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
          addNameTag(name.trim());
          setName('');
        }
      };

        return (
        <div>
            <h1>Name Tag Generator</h1>
            <form onSubmit={handleAddNameTag}>
                <input
                    className={styles.input}
                    type="text"
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                    placeholder="Enter Name"
                />
                <input
                    className={styles.input}
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Enter Role"
                />
                <input
                    className={styles.input}
                    type="text"
                    value={host}
                    onChange={(e) => setHost(e.target.value)}
                    placeholder="Enter Host"
                />
                <input
                    className={styles.input}
                    type="file"
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            setImage(e.target.files[0]);
                        }
                    }}
                    accept="image/*"
                />
                <button type="submit">Add Name Tag</button>
            </form>
            <NameTagList nametags={nametags} />
        </div>
    )
    
    
    }


export default Home;
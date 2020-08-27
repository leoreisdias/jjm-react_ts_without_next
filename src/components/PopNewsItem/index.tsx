import React from 'react';

import infoIcon from '../../assets/images/icons/warning.svg'
import './styles.css';
import { Link } from 'react-router-dom';

export interface PopNews {
    _id: string;
    imageURL: string;
    title: string;
    description: string;
    date: string;
    subjects: [string];
    video_url: string;
    facebook_url: string;
    altImageOne: string;
    altImageTwo: string;
    editorial: string;
    author: string;
    source: string;
    summary: string;
}

interface PopNewsItemProps {
    popnews: PopNews,
}

const PopNewsItem: React.FC<PopNewsItemProps> = ({ popnews }) => {
    const year = popnews.date.substring(0, 4);
    const month = popnews.date.substring(5, 7);
    const day = popnews.date.substring(8, 10);

    async function handleMetaUrl() {
        let link2 = await document.createElement('meta');
        link2.setAttribute('property', 'og:title');
        link2.content = popnews.title;
        await document.getElementsByTagName('head')[0].appendChild(link2);

        let link3 = await document.createElement('meta');
        link3.setAttribute('property', 'og:image');
        link3.content = popnews.imageURL;
        await document.getElementsByTagName('head')[0].appendChild(link3);
    }

    return (
        <article className="popnews-item">
            <header>
                <img src={popnews.imageURL} alt="Materia A" />
                <div>
                    <strong>{popnews.title}</strong>
                    <span>{popnews.subjects.join(',  ')}</span>
                </div>
            </header>

            {popnews.summary.split('##').map(item => {
                return <p
                    dangerouslySetInnerHTML={{
                        __html: item
                    }}
                    key={item} />
            })}
            <footer>
                <p>
                    Data da Publicação
                <strong>{`${day}/${month}/${year}`}</strong>
                </p>

                <Link to={`/popnews-detail/${popnews._id}`} onClick={handleMetaUrl}>
                    <button type="button">
                        <img src={infoIcon} alt="Mais informações" />
                        Fique por dentro
                </button>
                </Link>
            </footer>
        </article>
    )
}

export default PopNewsItem;
import wallpaper from './wallpaper.jpg';
import { CategoryList } from './../categories/CategoryList';

export const Home = () => {
    return (
        <div>
            <div className="adv-container">
                <img src={wallpaper} />
            </div>
            <CategoryList />
        </div>
    );
}
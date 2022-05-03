import { useNavigate } from 'react-router-dom';
export const Navigate = () => {
    const navigation = useNavigate();

    const goTo = to => navigation.navigate(to);

    return { goTo };
};
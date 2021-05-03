import spinner from './spinner.gif';

export const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt="Loading.." style={{ width: '200px', margin: '40px auto', display: 'block'}} />
        </div>
    );
};
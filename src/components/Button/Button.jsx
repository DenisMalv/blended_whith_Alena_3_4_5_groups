
export const Button = ({ toggleVisibility,isVisible }) => {
    return <button type='button' onClick={toggleVisibility}>{ isVisible ? 'Hide Films' : 'Show Films'}</button>
}
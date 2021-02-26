import preloader from '../assets/images/preloader.gif';

const Preloader = () => {
    return (
    <div style={{ marginTop: 150}}>
        <img src={preloader}  alt='preloader' style={{ width: '75px', height: '75px' }} />
    </div>
    )
}

export default Preloader;
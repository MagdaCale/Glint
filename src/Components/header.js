import './Head/header.css'

const Header = () => {
    return (
        <header className="header">
            <h2>Hello There</h2>
            <h1 className='headline'>We Are Glint</h1>
            <p className='headerPTag'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <section className='headerSection'>
                <article>
                    <h1>127</h1>
                    <p>Award Recived</p>
                </article>
                <article className='articleBorderLeft'>
                    <h1>1505</h1>
                    <p>Cups of Coffee</p>
                </article>
                <article className='articleBorderLeft'>
                    <h1>109</h1>
                    <p>Projects Completed</p>
                </article>
                <article className='articleBorderLeft'>
                    <h1>102</h1>
                    <p>Happy Clients</p>
                </article>
            </section>
        </header>
    )
}

export default Header
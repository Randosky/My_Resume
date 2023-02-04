import React from 'react'

const Home = () => {
    return (
        <div className='home'>
            <div style={{ display: "flex", justifyContent: "center" }}><hr color="#f5b955" className='line'></hr></div>
            <section className='home__main'>
                <div className='main__bg'></div>
                <div className='main__intro'>
                    <h1 className='main__fio'>Овинкин</h1>
                    <h1 className='main__fio'>Кирилл</h1>
                    <h2 className='main_vac'>Fronted-разработчик</h2>
                </div>
            </section>

            <div style={{ display: "flex", justifyContent: "center" }}><hr color="#f5b955" className='line'></hr></div>

            <section className='home__hello'>
                <h3>Приветственное слово</h3>
            </section>

            <div style={{ display: "flex", justifyContent: "center" }}><hr color="#f5b955" className='line'></hr></div>
            
            <section className='home__contacts'>
                <h3>Контакты</h3>
            </section>
        </div>
    )
}

export default Home
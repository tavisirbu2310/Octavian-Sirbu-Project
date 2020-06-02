import React from 'react';


const WeatherInfo = props => {
    return(
        <div className="module module__weather">
            <div className="weather">
                <div className={'weather'}>
                    <div className="weather__icon"><img className="clouds" src={props.path} alt={'img'}/></div>

                    <div className="weather__info">
                        <div className="city">
                            <span className="city__name">{props.cityName}</span>
                        </div>
                        <div className="temperature"><span className="temperature__value">{props.mainTemp}</span>&deg;C
                        </div>
                    </div>

                    <ul className="weather__details">
                        <li><img src="../../../../assets/images/weather/pressure.svg" alt={'img'}/> <span
                            className="pressure__value">{props.mainPress} hPa</span></li>
                        <li><img src="../../../../assets/images/weather/humidity.svg" alt={'img'}/> <span className="humidity__value">{props.mainHum}%</span>
                        </li>
                        <li><img src="../../../../assets/images/weather/wind-speed.svg" alt={'img'}/> <span
                            className="wind-speed__value">{props.mainWind} m/s</span></li>
                    </ul>
                </div>
                <ul className="weather__forecast">
                    <li>
                        <span className="day">{props.day_1}</span> <img className="clouds" src={props.sun1} alt={'img'}/>
                        <span className="temperature"><span className="temperature__value">{props.temp1}</span>&deg;C</span>
                    </li>

                    <li>
                        <span className="day">{props.day_2}</span> <img className="clouds" src={props.sun2} alt={'img'}/>
                        <span className="temperature"><span className="temperature__value">{props.temp2}</span>&deg;C</span>
                    </li>

                    <li>
                        <span className="day">{props.day_3}</span> <img className="clouds" src={props.sun3} alt={'img'}/>
                        <span className="temperature"><span className="temperature__value">{props.temp3}</span>&deg;C</span>
                    </li>

                    <li>
                        <span className="day">{props.day_4}</span> <img className="clouds" src={props.sun4} alt={'img'}/>
                        <span className="temperature"><span className="temperature__value">{props.temp4}</span>&deg;C</span>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default WeatherInfo;
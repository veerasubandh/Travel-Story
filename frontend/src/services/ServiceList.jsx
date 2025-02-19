import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl : weatherImg,
        title : 'Calculate Weather',
        desc : 'Calculate the weather for any location in the world',
    },
    {
        imgUrl : guideImg,
        title : 'Best Travel Guide',
        desc : 'Get the best travel guide for any destination',
    },
    {
        imgUrl : customizationImg,
        title : 'Customization',
        desc : 'Customize your trip according to your needs',
    }
]

const ServiceList = () => {
  return (
    <>
        {
            servicesData.map((service, index) => {
                return(
                    <Col key={index} lg="3">
                        <ServiceCard item={service}/>
                    </Col>
                )
            })
        }
    </>
  )
}

export default ServiceList

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            id: 1,
            title: "iPhone 15 Pro Max",
            subtitle: "El poder de la innovación",
            image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=400&fit=crop",
            link: "/item/1"
        },
        {
            id: 2,
            title: "MacBook Pro M3",
            subtitle: "Rendimiento sin límites",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=400&fit=crop",
            link: "/item/4"
        },
        {
            id: 3,
            title: "AirPods Pro 2",
            subtitle: "Sonido excepcional",
            image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&h=400&fit=crop",
            link: "/item/7"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [slides.length])

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <div className="hero-banner">
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="hero-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                            <Link to={slide.link}>
                                <button className="hero-btn">Ver Producto</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hero-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default HeroBanner

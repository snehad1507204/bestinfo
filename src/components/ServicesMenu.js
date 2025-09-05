import React from "react";
import { Link } from "react-router-dom";

const ServicesMenu = () => {
    const services = [
        { title: "Health Care Pharma" },
        { title: "IT Development" },
        { title: "IT Recruitment" },
        { title: "IT Training" },
        { title: "Staffing-Non IT" },
    ];

    return (
        <div className="services-menu">
            <div className="services-left">
                <h3>Services</h3>
                <p>
                    The right services can transform your business. We deliver strategic
                    solutions that drive growth and agility. Our team partners with you to understand your unique challenges and design solutions that align with your goals. From talent acquisition to workforce management, we provide innovative strategies that optimize efficiency and maximize performance.
                </p>
                <div className="btn-group">
                    <Link to="/services/learn-more" className="btn">Learn More</Link>
                    <Link to="/services/get-started" className="btn">Get Started</Link>
                </div>
            </div>

            <div className="services-middle">
                {services.map((srv, i) => (
                    <div key={i} className="service-item">
                        <strong>{srv.title}</strong>
                        <p>{srv.desc}</p>
                    </div>
                ))}
            </div>

            <div className="services-right">
                <h3>Latest Updates</h3>
                <ul>
                    <li><a href="/">CWS Summit 2025 – Dallas, TX</a></li>
                    <li><a href="/">AI-driven hiring solutions launched</a></li>
                    <li><a href="/">Top staffing firm award 2025</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ServicesMenu;

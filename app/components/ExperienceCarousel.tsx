"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import experienceData from "@/../.fake/experience";
import ExperienceItem from "@/../lib/interfaces/ExperienceItem";

interface ExperienceCarouselProps {
    itemsToShow?: number;
}

const ExperienceCarousel = ({ itemsToShow = 3 }: ExperienceCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [items, setItems] = useState<ExperienceItem[]>([]);

    useEffect(() => {
        // Get first few items for carousel
        const carouselItems = experienceData.slice(0, Math.min(itemsToShow + 1, experienceData.length));
        setItems(carouselItems);
    }, [itemsToShow]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    if (items.length === 0) return null;

    return (
        <div className="w-full py-8 px-4">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">
                    <span className="text-foreground">My </span>
                    <span className="text-primary">Experience</span>
                </h2>
                <Link
                    href="/experience"
                    className="flex items-center gap-2 text-primary hover:text-foreground transition-colors duration-200 group"
                >
                    <span className="text-sm font-medium">View All</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>

            <div className="relative w-full">
                <div className="overflow-hidden rounded-xl">
                    <div className="flex relative">
                        <AnimatePresence mode="wait">
                            {items.map((experience, index) => {
                                if (index !== currentIndex) return null;

                                return (
                                    <motion.div
                                        key={`${experience.title}-${index}`}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ width: "100%" }}
                                    >
                                        <Link
                                            href={`/company/${experienceData.findIndex((e) => e.title === experience.title)}`}
                                            className="block"
                                        >
                                            <div className="bg-secondary/40 backdrop-blur-sm border border-secondary/50 rounded-xl p-6 hover:bg-secondary/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                                                <div className="flex flex-col md:flex-row gap-6">
                                                    {experience.img && (
                                                        <div className="flex-shrink-0 w-full md:w-48 h-32 relative rounded-lg overflow-hidden bg-secondary/20">
                                                            <Image
                                                                src={experience.img.src}
                                                                alt={experience.img.alt || experience.title}
                                                                fill
                                                                className="object-contain p-2"
                                                                sizes="(max-width: 768px) 100vw, 192px"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className="flex-1 flex flex-col justify-between">
                                                        <div>
                                                            <h3 className="text-xl font-bold text-primary mb-2">
                                                                {experience.title}
                                                            </h3>
                                                            {experience.duration && (
                                                                <p className="text-sm text-foreground/70 mb-3">
                                                                    {experience.duration}
                                                                </p>
                                                            )}
                                                            {experience.description && experience.description.trim() && (
                                                                <p className="text-foreground/80 line-clamp-3 text-sm">
                                                                    {experience.description}
                                                                </p>
                                                            )}
                                                            {(!experience.description || !experience.description.trim()) && experience.achievements && experience.achievements.length > 0 && (
                                                                <p className="text-foreground/80 line-clamp-3 text-sm">
                                                                    {experience.achievements[0]}
                                                                </p>
                                                            )}
                                                            {experience.skills && experience.skills.length > 0 && (
                                                                <div className="flex flex-wrap gap-2 mt-4">
                                                                    {experience.skills.slice(0, 4).map((skill, idx) => (
                                                                        <span
                                                                            key={idx}
                                                                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
                                                                        >
                                                                            {skill}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {items.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-secondary/80 hover:bg-secondary text-foreground p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                            aria-label="Previous experience"
                        >
                            <FaChevronLeft className="text-sm" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-secondary/80 hover:bg-secondary text-foreground p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                            aria-label="Next experience"
                        >
                            <FaChevronRight className="text-sm" />
                        </button>
                    </>
                )}

                {items.length > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-200 ${index === currentIndex
                                    ? "w-8 bg-primary"
                                    : "w-2 bg-secondary/50 hover:bg-secondary/70"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCarousel;

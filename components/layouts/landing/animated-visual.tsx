"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedVisualProps {
    visual: {
        image: string;
        title: string;
        description: string;
        animationType?: "float" | "slide" | "zoom";
    };
    index: number;
}

export const AnimatedVisual = ({ visual }: AnimatedVisualProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-background border border-border/50 transition-all duration-500 hover:shadow-xl hover:border-primary/50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated Background */}
            <div className="relative h-64 overflow-hidden">
                {/* Background Image with zoom effect */}
                <div 
                    className={cn(
                        "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out",
                        isHovered ? "scale-110" : "scale-100"
                    )}
                    style={{ 
                        backgroundImage: `url(${visual.image})`,
                    }}
                />
                
                {/* Animated Gradient Overlay */}
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-all duration-700",
                    isHovered 
                        ? "from-primary/30 via-primary/10 to-transparent" 
                        : "from-background/60 via-background/40 to-transparent"
                )} />

                {/* Floating Particles Effect */}
                {isHovered && (
                    <>
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-ping" />
                        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse" 
                             style={{ animationDelay: "0.3s" }} />
                        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-primary/20 rounded-full animate-ping" 
                             style={{ animationDelay: "0.6s" }} />
                    </>
                )}

                {/* Animated Lines */}
                <div className={cn(
                    "absolute inset-0 opacity-0 transition-opacity duration-700",
                    isHovered && "opacity-100"
                )}>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer" 
                         style={{ animationDelay: "0.5s" }} />
                </div>

                {/* Scanning Effect */}
                {isHovered && (
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/20 to-transparent animate-scan" />
                    </div>
                )}
            </div>
            
            {/* Content */}
            <div className="relative p-6 bg-gradient-to-t from-background to-transparent">
                <div className={cn(
                    "transition-all duration-500",
                    isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-80"
                )}>
                    <h4 className={cn(
                        "font-semibold text-xl mb-2 transition-colors duration-300",
                        isHovered ? "text-primary" : "text-foreground"
                    )}>
                        {visual.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {visual.description}
                    </p>
                </div>
                
                {/* Progress Bar */}
                <div className={cn(
                    "mt-4 h-1 bg-gradient-to-r from-primary via-primary/70 to-primary/50 rounded-full transition-all duration-700 origin-left",
                    isHovered ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                )} />

                {/* Corner Accent */}
                <div className={cn(
                    "absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full transition-all duration-500",
                    isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )} />
            </div>
        </div>
    );
};
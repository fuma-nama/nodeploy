import { useEffect, useRef } from "react";
import createGlobe from "cobe";
export function useEarth() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current == null) return;
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 900 * 2,
            height: 900 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.7, 0.3, 0.2],
            markerColor: [0.98, 0.57, 0.24],
            glowColor: [0.98, 0.57, 0.24],
            markers: [],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return { ref: canvasRef };
}

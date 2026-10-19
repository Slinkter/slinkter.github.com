/**
 * @module app/router
 * @description Configuración de rutas de la aplicación.
 */

import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import { PokemonSkeleton } from "@/features/pokemon";
import ErrorPage from "./ErrorPage";
import MainLayout from "./MainLayout";
import DetailLayout from "./DetailLayout";

const PokedexPage = lazy(() => import("@/pages/PokedexPage"));
const PokemonDetailPage = lazy(() => import("@/pages/PokemonDetailPage"));

const router = createHashRouter(
    [
        {
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: (
                        <Suspense fallback={<PokemonSkeleton />}>
                            <PokedexPage />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            element: <DetailLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "pokemon/:id",
                    element: (
                        <Suspense fallback={<PokemonSkeleton />}>
                            <PokemonDetailPage />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "*",
            element: <ErrorPage />,
            errorElement: <ErrorPage />,
        },
    ]
);

export default router;
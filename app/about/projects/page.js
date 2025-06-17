import { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";

export const metadata = {
    title: "Projects",
};

export default async function ProjectsPage(){
    return (
        <div>
            <h1 className="mb-8 text-xl">Projects</h1>
            <div className="mb-8">This is the list of projects.</div>

            <ErrorBoundary fallback={<div>Unable to fetch projects currently.</div>}>
                <Suspense fallback={<ProjectListLoading/>}>
                    <ProjectList/>
                </Suspense>
            </ErrorBoundary>
            
        </div>
    )
}
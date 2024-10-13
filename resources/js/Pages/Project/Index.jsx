import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ projects }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Image</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Created Date</th>
                    <th className="px-3 py-3">Due Date</th>
                    <th className="px-3 py-3">Created By</th>
                    <th className="px-3 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.data.map((project) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th className="px-3 py-2">{project.id}</th>
                      <th className="px-3 py-2">
                        {project.image_path && (
                          <img
                            src={project.image_path}
                            alt={project.name}
                            className="h-10 w-10"
                          />
                        )}
                      </th>
                      <th className="px-3 py-2">{project.name}</th>
                      <th className="px-3 py-2">{project.status}</th>
                      <th className="px-3 py-2">
                        {new Date(project.due_date).toLocaleDateString()}
                      </th>
                      <tb className="px-3 py-2">{project.createdBy.name}</tb>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

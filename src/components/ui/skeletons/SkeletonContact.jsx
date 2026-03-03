import Section from "@/components/common/Section";

/**
 * SkeletonContact Component
 *
 * Loading placeholder for the Contact section.
 * Pure Tailwind — no BEM abstraction.
 *
 * @component
 * @returns {React.JSX.Element}
 */
const SkeletonContact = () => {
  return (
    <Section title="Contacto" bgVariant="dark">
      <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl mx-auto">
        {/* Info skeleton */}
        <div className="flex flex-col justify-center">
          <div className="h-6 w-3/4 skeleton mb-8" />
          <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 space-y-4">
            <div className="h-8 w-48 skeleton" />
            <div className="flex flex-wrap gap-4 mt-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={`social-sk-${num}`} className="h-10 w-10 rounded-full skeleton" />
              ))}
            </div>
          </div>
        </div>

        {/* Form skeleton */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="h-8 w-48 skeleton mb-6" />
          <div className="space-y-4">
            {[1, 2].map((num) => (
              <div key={`input-sk-${num}`}>
                <div className="h-4 w-24 skeleton mb-1" />
                <div className="h-12 w-full rounded-xl skeleton" />
              </div>
            ))}
            <div>
              <div className="h-4 w-24 skeleton mb-1" />
              <div className="h-32 w-full rounded-xl skeleton" />
            </div>
            <div className="h-12 w-full rounded-full skeleton mt-6" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkeletonContact;

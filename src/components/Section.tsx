import type { SectionProps } from '../interface/interface'

const Section = ({ title, children }: SectionProps) => {
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
                {title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {children}
            </div>
        </div>
    )
}

export default Section

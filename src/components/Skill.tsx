import type { SkillProps } from "../interface/interface";

const Skill = ({ icon: Icon, name }: SkillProps) => {
    return (
        <div className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 transition p-3 rounded-xl">
            <Icon className="text-xl text-yellow-400" />
            <span>{name}</span>
        </div>
    )
}

export default Skill;
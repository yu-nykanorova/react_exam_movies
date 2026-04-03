export const GenreBadge = ({name, className}: {name: string, className?: string}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            {name}
        </div>
    );
};

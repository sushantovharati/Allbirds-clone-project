type PlusIconProps = {
  open: boolean;
};


export default function PlusIcon({ open }: PlusIconProps) {
    return (
        <span className="relative h-4 w-4">
            <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
            <span
                className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current transition-transform duration-300 ${open ? "rotate-0" : "rotate-90"
                    }`}
            />
        </span>
    );
}

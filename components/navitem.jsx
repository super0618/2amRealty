import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "react-feather";

export default function ({ label, href = "#", dropdown = null }) {
	if (dropdown) {
		return (
			<Popover.Root>
				<Popover.Trigger>
					<div className="py-2 px-3 text-lg font-bold flex items-center gap-[2px]">
						<div>{label}</div>
						<ChevronDown />
					</div>
				</Popover.Trigger>
				<Popover.Content>{dropdown}</Popover.Content>
			</Popover.Root>
		);
	}
	return (
		<Link href={href} className="p-2 text-lg font-bold">
			{label}
		</Link>
	);
}

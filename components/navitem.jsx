import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";
import { IconChevronDown } from "@tabler/icons-react";

export default function ({ label, href = "#", dropdown = null, arrowdown = false }) {
	if (dropdown) {
		return (
			<Popover.Root>
				<Popover.Trigger>
					<div className="py-2 px-3 text-lg flex items-center gap-[2px]">
						<div>{label}</div>
						{arrowdown && <IconChevronDown />}
					</div>
				</Popover.Trigger>
				<Popover.Content>{dropdown}</Popover.Content>
			</Popover.Root>
		);
	}
	return (
		<Link href={href} className="p-2 text-lg flex items-center">
			{label}
		</Link>
	);
}

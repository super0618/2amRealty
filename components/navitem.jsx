import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import { IconChevronDown } from "@tabler/icons-react";

export default function ({ label, href = "#", dropdown = null, arrowdown = false }) {
	if (dropdown) {
		return (
			<Tooltip.TooltipProvider>
				<Tooltip.Root delayDuration={0}>
					<Tooltip.Trigger>
						<div className="py-2 px-3 text-lg flex items-center gap-[2px]">
							<div>{label}</div>
							{arrowdown && <IconChevronDown />}
						</div>
					</Tooltip.Trigger>
					<Tooltip.Content>{dropdown}</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.TooltipProvider>
		);
	}
	return (
		<Link href={href} className="p-2 text-lg flex items-center">
			{label}
		</Link>
	);
}

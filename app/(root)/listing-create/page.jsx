import Law from "@/components/law";
import { IconUpload } from "@tabler/icons-react";

export default function () {
	return (
		<div className="bg-gray-50 pt-32 pb-12">
			<div className="container">
				<div className="font-bold text-2xl">Add New Listing</div>
			</div>
			<div className="container p-6">
				<div className="bg-white border rounded-md shadow-sm p-6 mb-6">
					<div className="text-lg font-bold mb-6">Listing</div>
					<div className="text-sm mb-4">Property Title</div>
					<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
					<div className="text-sm mb-4">Description</div>
					<textarea className="border rounded-md w-full resize-none h-64 p-4 mb-6"></textarea>
					<div className="grid grid-cols-2 gap-6">
						<div>
							<div className="text-sm mb-4">Type</div>
							<select className="border rounded-md w-full py-2 px-4 mb-6">
								<option value="1">Type 1</option>
								<option value="2">Type 2</option>
								<option value="3">Type 3</option>
							</select>
						</div>
						<div>
							<div className="text-sm mb-4">Status</div>
							<select className="border rounded-md w-full py-2 px-4 mb-6">
								<option value="1">Status 1</option>
								<option value="2">Status 2</option>
								<option value="3">Status 3</option>
							</select>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-6">
						<div>
							<div className="text-sm mb-4">Price</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Area</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Rooms</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
					</div>
				</div>

				<div className="bg-white border rounded-md shadow-sm p-6 mb-6">
					<div className="text-lg font-bold mb-6">Location</div>
					<div className="text-sm mb-4">Address</div>
					<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
					<div className="grid grid-cols-2 gap-6">
						<div>
							<div className="text-sm mb-4">County / State</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">City</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
					</div>
					<div className="grid grid-cols-3 gap-6">
						<div>
							<div className="text-sm mb-4">Neighborhood</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Zip</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Country</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
					</div>
				</div>

				<div className="bg-white border rounded-md shadow-sm p-6 mb-6">
					<div className="text-lg font-bold mb-6">Detailed Information</div>
					<div className="grid grid-cols-3 gap-6">
						<div>
							<div className="text-sm mb-4">Property ID</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Area Size</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Size Prefix</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
					</div>
					<div className="grid grid-cols-3 gap-6">
						<div>
							<div className="text-sm mb-4">Land Area</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Land Area Size Postfix</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Bedrooms</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
					</div>
					<div className="grid grid-cols-3 gap-6">
						<div>
							<div className="text-sm mb-4">Bathrooms</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Garages</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Garages Size</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
					</div>
					<div className="grid grid-cols-3 gap-6">
						<div>
							<div className="text-sm mb-4">Year Built</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">Video URL</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
						<div>
							<div className="text-sm mb-4">360° Virtual Tour</div>
							<input type="text" className="border rounded-md w-full py-2 px-4 mb-6" />
						</div>
					</div>
					<div className="text-sm mb-4">Year Built</div>
					<div className="grid grid-cols-4 gap-6">
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Air Conditioning
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Barbeque
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Dryer
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Gym
							</label>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-6">
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Laundry
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Lawn
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Microwave
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Outdoor Shower
							</label>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-6">
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Refrigerator
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Sauna
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Swimming Pool
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								TV Cable
							</label>
						</div>
					</div>
					<div className="grid grid-cols-4 gap-6">
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Washer
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								WiFi
							</label>
						</div>
						<div>
							<label className="flex items-center gap-2 mb-4">
								<input type="checkbox" name="checkbox" className="w-4 h-4" />
								Window Coverings
							</label>
						</div>
					</div>
				</div>

				<div className="bg-white border rounded-md shadow-sm p-6 mb-6">
					<div className="text-lg font-bold mb-6">Property media</div>
					<label for="upload-photo" className="w-full bg-gray-200 grid place-items-center rounded-md h-40 mb-12 cursor-pointer">
						<IconUpload color="#666" size={36} />
					</label>
					<input type="file" name="photo" id="upload-photo" className="absolute opacity-0 -z-10" />
					<div className="flex justify-between">
						<div className="border-2 border-[#B63437] text-[#B63437] rounded-md px-8 py-2">Cancel</div>
						<div className="rounded-lg bg-[#B63437] text-white px-8 py-2">Save</div>
					</div>
				</div>
			</div>
			<Law />
		</div>
	);
}

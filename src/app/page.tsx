import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			<div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
				<header className="container mx-auto px-4 py-6 flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<Image
							src="/SecureChain_logo.jpeg"
							alt="logo"
							height={100}
							width={100}
						/>
						<span className="text-2xl">SecureChain</span>
					</div>
					<div>
						<ul className="flex gap-8 items-center">
							<li className="rounded-full bg-teal-600 px-8 py-2">
								<Link href="/login" />
								Login
							</li>
							<li>Sign Up</li>
						</ul>
					</div>
				</header>

				<main>
					<section className="container mx-auto px-4 py-20 text-center">
						<div>
							<h1 className="text-5xl font-bold mb-6">
								Secure File Sharing with Blockchain
							</h1>
							<p className="text-xl mb-10 max-w-2xl mx-auto">
								Experience unparalleled security and efficiency in file sharing
								with SecureChain&apos;s innovative blockchain technology.
							</p>
						</div>
					</section>

					<section id="how-it-works" className="bg-gray-800 py-20">
						<div className="container mx-auto px-4">
							<h2 className="text-3xl font-bold mb-10 text-center">
								How It Works
							</h2>
							<div className="max-w-3xl mx-auto">
								<ol className="relative border-l border-teal-500">
									<Step
										number={1}
										title="Upload your file"
										description="Securely upload your file to our platform."
									/>
									<Step
										number={2}
										title="Blockchain encryption"
										description="Your file is encrypted and stored on the blockchain."
									/>
									<Step
										number={3}
										title="Share securely"
										description="Generate a secure link to share with your intended recipients."
									/>
									<Step
										number={4}
										title="Access control"
										description="Manage permissions and revoke access at any time."
									/>
								</ol>
							</div>
						</div>
					</section>

					<section
						id="contact"
						className="container mx-auto px-4 py-20 text-center">
						<h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
						<p className="text-xl mb-10">
							Join SecureChain today and experience the future of secure file
							sharing.
						</p>
						<button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition-colors">
							Sign Up Now
						</button>
					</section>
				</main>

				<footer className="bg-gray-900 py-6">
					<div className="container mx-auto px-4 text-center text-gray-400">
						<p>&copy; 2024 SecureChain. All rights reserved.</p>
					</div>
				</footer>
			</div>
		</>
	)
}

const Step = ({
	number,
	title,
	description,
}: {
	number: number
	title: string
	description: string
}) => (
	<li className="mb-10 ml-6">
		<span className="absolute flex items-center justify-center w-8 h-8 bg-teal-500 rounded-full -left-4 ring-4 ring-gray-900 text-white">
			{number}
		</span>
		<h3 className="font-medium leading-tight">{title}</h3>
		<p className="text-sm text-gray-400">{description}</p>
	</li>
)

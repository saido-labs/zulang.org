import { Github, Zap, Code2, Waves } from 'lucide-react';

const codeExample = `println("Hello, world!")`;

const shellExample = `$ zu run main.zu
Hello, world!`

export function Home() {

	return (
		<div className="min-h-screen bg-white text-gray-900">
			<div className="max-w-5xl mx-auto px-6 py-16">

				{/* Header */}
				<header className="flex items-center justify-between mb-20 pb-6 border-b border-gray-200">
					<div className="flex items-center gap-3">
						<Waves className="w-7 h-7 text-emerald-400" />
						<h1 className="text-2xl font-bold">
							Zu <span className='text-xs text-gray-700'>v0.0.1-alpha</span>
						</h1>
					</div>
					<a
						href="https://github.com/saido-labs/zu"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
					>
						<Github className="w-5 h-5" />
						<span className="font-medium">GitHub</span>
					</a>
				</header>

				{/* Hero */}
				<div className="mb-16">
					<p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
						Zu is a stream-based programming language.
					</p>
				</div>

				<div className="mb-16 space-y-4">
					<div>
						<div className="flex items-center gap-2 italic">
							<h3 className="text-sm font-semibold tracking-wider text-gray-500">main.zu</h3>
						</div>
						<div className="bg-gray-50 border border-gray-200 rounded p-6">
							<pre className="text-sm leading-relaxed overflow-x-auto">
								<code className="text-gray-800 font-mono">{codeExample}</code>
							</pre>
						</div>
					</div>

					<div>
						<div className="flex items-center gap-2 italic">
							<h3 className="text-sm font-semibold tracking-wider text-gray-500">Shell</h3>
						</div>
						<div className="bg-gray-50 border border-gray-200 rounded p-6">
							<pre className="text-sm leading-relaxed overflow-x-auto">
								<code className="text-gray-800 font-mono">{shellExample}</code>
							</pre>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
					{[
					].map((feature, i) => (
						<div key={i} className="p-6 border border-gray-200 rounded hover:border-gray-300 transition-colors">
							<h4 className="font-semibold mb-2 text-gray-900">{feature.title}</h4>
							<p className="text-sm text-gray-600">{feature.desc}</p>
						</div>
					))}
				</div>

				{/* Footer */}
				<footer className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
					<p>Zu is experimental software. Not recommended for production use.</p>
				</footer>
			</div>
		</div>
	);
}
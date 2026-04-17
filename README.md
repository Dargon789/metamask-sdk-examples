<h1 id="metamask-sdk-examples-monorepo">🚀 MetaMask SDK Examples Monorepo</h1>
This monorepo contains various example applications demonstrating the integration of MetaMask SDK across different frameworks, platforms and partners.

<h2 id="-getting-started">🚀 Getting Started</h2>

<p>Clone and install dependencies for all examples:</p>

<div class="language-sh highlighter-rouge"><div class="highlight"><pre class="highlight"><code>git clone https://github.com/MetaMask/metamask-sdk-examples.git
<span class="nb">cd </span>metamask-sdk-examples
</code></pre></div></div>

<h2 id="-repository-structure">📦 Repository Structure</h2>

<div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>metamask-sdk-examples/
├── quickstarts/      # Example applications
│   ├── javascript/    # JavaScript integration
│   ├── react/         # React + Vite integration
│   ├── next/          # Next.js integration
│   ├── react-native/  # React Native integration
│   ├──────────────────────────
│   ├── wagmi/         # Wagmi integration
│   ├── rainbowkit/    # RainbowKit integration
├── partners/          # Example applications with partners
│   ├── dynamic/       # Dynamic integration
│   ├── web3auth/      # Web3Auth integration
</code></pre></div></div>

<h2 id="-available-examples">🎯 Available Examples</h2>

<p>Each example in the <code class="language-plaintext highlighter-rouge">quickstarts/</code> directory demonstrates MetaMask SDK integration in different frameworks and scenarios:</p>

<ul>
  <li><a href="quickstarts/react"><strong>React Example</strong></a>: Modern React application showcasing hooks and components</li>
  <li><a href="quickstarts/next"><strong>Next.js Example</strong></a>: Server-side rendering and static site generation</li>
  <li><a href="quickstarts/javascript"><strong>JavaScript Example</strong></a>: Pure JavaScript implementation without frameworks</li>
  <li><a href="quickstarts/react-native"><strong>React Native Example</strong></a>: React Native integration example</li>
  <li><a href="quickstarts/wagmi"><strong>Wagmi Example</strong></a>: Wagmi integration example</li>
  <li><a href="quickstarts/rainbowkit"><strong>RainbowKit Example</strong></a>: RainbowKit integration example</li>
</ul>

<p>And each example in the <code class="language-plaintext highlighter-rouge">partners/</code> directory demonstrates MetaMask SDK integration with different partners:</p>

<ul>
  <li><a href="partners/dynamic"><strong>Dynamic Example</strong></a>: Dynamic integration example</li>
  <li><a href="partners/web3auth"><strong>Web3Auth Example</strong></a>: Web3Auth integration example</li>
</ul>

<h2 id="-development">🛠 Development</h2>

<h3 id="running-individual-examples">Running Individual Examples</h3>

<p>To run a specific example:</p>

<div class="language-sh highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nb">cd</span> &lt;quickstarts or partners&gt;/&lt;example-name&gt;
pnpm <span class="nb">install</span> <span class="o">&amp;&amp;</span> pnpm dev
</code></pre></div></div>

<h2 id="cloning-individual-examples-using-degit">Cloning individual examples using <a href="https://www.npmjs.com/package/degit">degit</a></h2>

<ul>
  <li><a href="quickstarts/react"><strong>React Example</strong></a>:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>npx degit MetaMask/metamask-sdk-examples/quickstarts/react mm-sdk-react-quickstart <span class="o">&amp;&amp;</span> <span class="nb">cd </span>mm-sdk-react-quickstart <span class="o">&amp;&amp;</span> npm <span class="nb">install</span> <span class="o">&amp;&amp;</span> npm run dev
</code></pre></div>    </div>
  </li>
  <li><a href="quickstarts/next"><strong>Next.js Example</strong></a>:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>npx degit MetaMask/metamask-sdk-examples/quickstarts/next mm-sdk-nextjs-quickstart <span class="o">&amp;&amp;</span> <span class="nb">cd </span>mm-sdk-nextjs-quickstart <span class="o">&amp;&amp;</span> npm <span class="nb">install</span> <span class="o">&amp;&amp;</span> npm run dev
</code></pre></div>    </div>
  </li>
  <li><a href="quickstarts/javascript"><strong>JavaScript Example</strong></a>:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>npx degit MetaMask/metamask-sdk-examples/quickstarts/javascript mm-sdk-javascript-quickstart <span class="o">&amp;&amp;</span> <span class="nb">cd </span>mm-sdk-javascript-quickstart <span class="o">&amp;&amp;</span> npm <span class="nb">install</span> <span class="o">&amp;&amp;</span> npm run dev
</code></pre></div>    </div>
  </li>
  <li><a href="quickstarts/wagmi"><strong>Wagmi Example</strong></a>:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>npx degit MetaMask/metamask-sdk-examples/quickstarts/wagmi mm-sdk-wagmi-quickstart <span class="o">&amp;&amp;</span> <span class="nb">cd </span>mm-sdk-wagmi-quickstart <span class="o">&amp;&amp;</span> npm <span class="nb">install</span> <span class="o">&amp;&amp;</span> npm run dev
</code></pre></div>    </div>
  </li>
  <li><a href="quickstarts/rainbowkit"><strong>RainbowKit Example</strong></a>:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>npx degit MetaMask/metamask-sdk-examples/quickstarts/rainbowkit mm-sdk-rainbowkit-quickstart <span class="o">&amp;&amp;</span> <span class="nb">cd </span>mm-sdk-rainbowkit-quickstart <span class="o">&amp;&amp;</span> npm <span class="nb">install</span> <span class="o">&amp;&amp;</span> npm run dev
</code></pre></div>    </div>
  </li>
  <li><a href="partners/dynamic"><strong>Dynamic Example</strong></a>:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>npx degit MetaMask/metamask-sdk-examples/partners/dynamic mm-sdk-dynamic-quickstart <span class="o">&amp;&amp;</span> <span class="nb">cd </span>mm-sdk-dynamic-quickstart <span class="o">&amp;&amp;</span> npm <span class="nb">install</span> <span class="o">&amp;&amp;</span> npm run dev
</code></pre></div>    </div>
  </li>
  <li><a href="partners/web3auth"><strong>Web3Auth Example</strong></a>:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>npx degit MetaMask/metamask-sdk-examples/partners/web3auth mm-sdk-web3auth-quickstart <span class="o">&amp;&amp;</span> <span class="nb">cd </span>mm-sdk-web3auth-quickstart <span class="o">&amp;&amp;</span> npm <span class="nb">install</span> <span class="o">&amp;&amp;</span> npm run dev
</code></pre></div>    </div>
  </li>
</ul>

<h2 id="-documentation">📚 Documentation</h2>

<p>Each example includes its own README with:</p>

<ul>
  <li>Specific setup instructions</li>
  <li>Implementation details</li>
  <li>Best practices</li>
  <li>Common issues and solutions</li>
</ul>

<h2 id="-contributing">🤝 Contributing</h2>

<p>We welcome contributions!</p>

<p>To add a new example:</p>

<ol>
  <li>Fork the repository</li>
  <li>Create a new branch</li>
  <li>Add your example</li>
  <li>Submit a pull request</li>
</ol>

<h2 id="-license">📝 License</h2>

<p>This project is licensed under the MIT License - see the LICENSE file for details.</p>

<h2 id="-useful-links">🔗 Useful Links</h2>

<ul>
  <li><a href="https://docs.metamask.io/sdk/">MetaMask SDK Documentation</a></li>
  <li><a href="https://github.com/MetaMask/metamask-sdk-examples/issues">Report Issues</a></li>
</ul>

# MetaMask SDK Examples Monorepo

This monorepo contains various example applications demonstrating the integration of MetaMask SDK across different frameworks, platforms and partners.

## 🚀 Getting Started

Clone and install dependencies for all examples:

```sh
git clone https://github.com/MetaMask/metamask-sdk-examples.git
cd metamask-sdk-examples
```

## 📦 Repository Structure

```
metamask-sdk-examples/
├── quickstarts/      # Example applications
│   ├── javascript/    # JavaScript integration
│   ├── react/         # React + Vite integration
│   ├── next/          # Next.js integration
│   ├── react-native/  # React Native integration
│   ├──────────────────────────
│   ├── wagmi/         # Wagmi integration
│   ├── rainbowkit/    # RainbowKit integration
├── partners/          # Example applications with partners
│   ├── dynamic/       # Dynamic integration
│   ├── web3auth/      # Web3Auth integration
```

## 🎯 Available Examples

Each example in the `quickstarts/` directory demonstrates MetaMask SDK integration in different frameworks and scenarios:

- [**React Example**](quickstarts/react): Modern React application showcasing hooks and components
- [**Next.js Example**](quickstarts/next): Server-side rendering and static site generation
- [**JavaScript Example**](quickstarts/javascript): Pure JavaScript implementation without frameworks
- [**React Native Example**](#): React Native integration example
- [**Wagmi Example**](quickstarts/wagmi): Wagmi integration example
- [**RainbowKit Example**](quickstarts/rainbowkit): RainbowKit integration example

And each example in the `partners/` directory demonstrates MetaMask SDK integration with different partners:

- [**Dynamic Example**](partners/dynamic): Dynamic integration example
- [**Web3Auth Example**](partners/web3auth): Web3Auth integration example

## 🛠 Development

### Running Individual Examples

To run a specific example:

```sh
cd <quickstarts or partners>/<example-name>
pnpm install && pnpm dev
```

## Cloning individual examples using [degit](https://www.npmjs.com/package/degit)

- [**React Example**](quickstarts/react):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/quickstarts/react mm-sdk-react-quickstart && cd mm-sdk-react-quickstart && npm install && npm run dev
  ```
- [**Next.js Example**](quickstarts/next):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/quickstarts/next mm-sdk-nextjs-quickstart && cd mm-sdk-nextjs-quickstart && npm install && npm run dev
  ```
- [**JavaScript Example**](quickstarts/javascript):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/quickstarts/javascript mm-sdk-javascript-quickstart && cd mm-sdk-javascript-quickstart && npm install && npm run dev
  ```
- [**Wagmi Example**](quickstarts/wagmi):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/quickstarts/wagmi mm-sdk-wagmi-quickstart && cd mm-sdk-wagmi-quickstart && npm install && npm run dev
  ```
- [**RainbowKit Example**](quickstarts/rainbowkit):

  ```bash
  npx degit MetaMask/metamask-sdk-examples/quickstarts/rainbowkit mm-sdk-rainbowkit-quickstart && cd mm-sdk-rainbowkit-quickstart && npm install && npm run dev
  ```

- [**Dynamic Example**](partners/dynamic):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/partners/dynamic mm-sdk-dynamic-quickstart && cd mm-sdk-dynamic-quickstart && npm install && npm run dev
  ```
- [**Web3Auth Example**](partners/web3auth):
  ```bash
  npx degit MetaMask/metamask-sdk-examples/partners/web3auth mm-sdk-web3auth-quickstart && cd mm-sdk-web3auth-quickstart && npm install && npm run dev
  ```

## 📚 Documentation

Each example includes its own README with:

- Specific setup instructions
- Implementation details
- Best practices
- Common issues and solutions

## 🤝 Contributing

We welcome contributions!

To add a new example:

1. Fork the repository
2. Create a new branch
3. Add your example
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Useful Links

- [MetaMask SDK Documentation](https://docs.metamask.io/sdk/)
- [Report Issues](https://github.com/MetaMask/metamask-sdk-examples/issues)

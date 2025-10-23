import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ContactSection extends StatelessWidget {
  const ContactSection({super.key, required this.scrollController});

  final ScrollController scrollController;

  Future<void> _launchUrl(Uri uri) async {
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      debugPrint('Could not launch $uri');
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final channels = <_ContactChannel>[
      _ContactChannel(
        icon: Icons.mail_outline,
        label: 'Email',
        detail: 'bekeledagim3@gmail.com',
        uri: Uri.parse('mailto:bekeledagim3@gmail.com'),
      ),
      _ContactChannel(
        icon: Icons.business_center_outlined,
        label: 'LinkedIn',
        detail: '/in/dagim-bekele-7a3b6529b',
        uri: Uri.parse('https://www.linkedin.com/in/dagim-bekele-7a3b6529b/'),
      ),
      _ContactChannel(
        icon: Icons.code,
        label: 'GitHub',
        detail: '@dagdagim',
        uri: Uri.parse('https://github.com/dagdagim'),
      ),
      _ContactChannel(
        icon: Icons.code,
        label: 'GitHub',
        detail: '@dagimbe',
        uri: Uri.parse('https://github.com/dagimbe'),
      ),
      _ContactChannel(
        icon: Icons.work_outline,
        label: 'Upwork',
        detail: 'Top-Rated Plus',
        uri: Uri.parse('https://upwork.com/freelancers/dagim'),
      ),
    ];

    return DecoratedBox(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(28),
        gradient: LinearGradient(
          colors: [
            theme.colorScheme.surface,
            theme.colorScheme.surface.withValues(alpha: 0.82),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        boxShadow: [
          BoxShadow(
            color: theme.colorScheme.primary.withValues(alpha: 0.1),
            blurRadius: 32,
            offset: const Offset(0, 18),
          ),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Let\'s Build Something Incredible',
              style: theme.textTheme.titleLarge?.copyWith(fontWeight: FontWeight.w800),
            ),
            const SizedBox(height: 8),
            Text(
              'Ready to ship a flagship AI experience? Reach out via any channel or start the conversation directly.',
              style: theme.textTheme.bodyMedium?.copyWith(height: 1.6),
            ),
            const SizedBox(height: 24),
            LayoutBuilder(
              builder: (context, constraints) {
                final isWide = constraints.maxWidth >= 720;
                final crossAxisCount = isWide ? 2 : 1;
                const double spacing = 16;
                final cardWidth = isWide
                    ? (constraints.maxWidth - spacing) / crossAxisCount
                    : constraints.maxWidth;

                return Wrap(
                  spacing: spacing,
                  runSpacing: spacing,
                  children: [
                    for (final channel in channels)
                      SizedBox(
                        width: cardWidth,
                        child: _ContactCard(
                          channel: channel,
                          onTap: () => _launchUrl(channel.uri),
                        ),
                      ),
                  ],
                );
              },
            ),
            const SizedBox(height: 24),
            LayoutBuilder(
              builder: (context, constraints) {
                final bool isWide = constraints.maxWidth >= 560;

                Widget buildSendButton() => FilledButton.icon(
                      onPressed: () => _launchUrl(
                        Uri.parse('mailto:bekeledagim3@gmail.com?subject=Project%20Inquiry'),
                      ),
                      icon: const Icon(Icons.send),
                      label: const Text('Send Message'),
                    );

                Widget buildBookButton() => OutlinedButton.icon(
                      onPressed: () => _launchUrl(
                        Uri.parse('https://calendly.com/dagdagim/30min'),
                      ),
                      icon: const Icon(Icons.calendar_today_outlined),
                      label: const Text('Book a Call'),
                    );

                Widget buildBackButton() => TextButton.icon(
                      onPressed: () {
                        if (scrollController.hasClients) {
                          scrollController.animateTo(
                            0,
                            duration: const Duration(milliseconds: 600),
                            curve: Curves.easeInOut,
                          );
                        }
                      },
                      icon: const Icon(Icons.arrow_upward),
                      label: const Text('Back to top'),
                    );

                if (isWide) {
                  return Row(
                    children: [
                      buildSendButton(),
                      const SizedBox(width: 12),
                      buildBookButton(),
                      const Spacer(),
                      buildBackButton(),
                    ],
                  );
                }

                return Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    SizedBox(width: double.infinity, child: buildSendButton()),
                    const SizedBox(height: 12),
                    SizedBox(width: double.infinity, child: buildBookButton()),
                    const SizedBox(height: 12),
                    Align(
                      alignment: Alignment.center,
                      child: buildBackButton(),
                    ),
                  ],
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

class _ContactChannel {
  const _ContactChannel({
    required this.icon,
    required this.label,
    required this.detail,
    required this.uri,
  });

  final IconData icon;
  final String label;
  final String detail;
  final Uri uri;
}

class _ContactCard extends StatelessWidget {
  const _ContactCard({required this.channel, required this.onTap});

  final _ContactChannel channel;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Material(
      color: Colors.transparent,
      borderRadius: BorderRadius.circular(20),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(20),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: theme.colorScheme.surface.withValues(alpha: 0.9),
            border: Border.all(
              color: theme.brightness == Brightness.dark
                  ? Colors.white.withValues(alpha: 0.1)
                  : Colors.black.withValues(alpha: 0.05),
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Row(
              children: [
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(16),
                    color: theme.colorScheme.primary.withValues(alpha: 0.12),
                  ),
                  child: Icon(channel.icon, color: theme.colorScheme.primary),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        channel.label,
                        style: theme.textTheme.titleSmall?.copyWith(fontWeight: FontWeight.w700),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        channel.detail,
                        style: theme.textTheme.bodyMedium,
                      ),
                    ],
                  ),
                ),
                const Icon(Icons.open_in_new, size: 18),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

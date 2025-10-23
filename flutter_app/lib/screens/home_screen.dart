import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';

import '../controllers/theme_controller.dart';
import '../data/content.dart';
import '../widgets/contact_section.dart';
import '../widgets/hero_section.dart';
import '../widgets/projects_section.dart';
import '../widgets/skills_section.dart';
import '../widgets/testimonials_section.dart';
import '../widgets/footer_section.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  late final ScrollController _scrollController;

  @override
  void initState() {
    super.initState();
    _scrollController = ScrollController();
  }

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final isDark = theme.brightness == Brightness.dark;
    final themeController = context.watch<ThemeController>();

    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        titleSpacing: 24,
        title: Row(
          children: [
            CircleAvatar(
              backgroundImage: const AssetImage(
                'assets/images/Generated Image October 21, 2025 - 11_33PM.png',
              ),
              backgroundColor: theme.colorScheme.secondary.withValues(alpha: 0.12),
              radius: 20,
            ),
            const SizedBox(width: 12),
            Text(
              'Dagim Bekele',
              style: theme.textTheme.titleLarge?.copyWith(
                fontWeight: FontWeight.w700,
              ),
            ),
          ],
        ),
        actions: [
          IconButton(
            onPressed: themeController.toggleTheme,
            icon: Icon(themeController.isDark ? Icons.light_mode : Icons.dark_mode),
          ),
          const SizedBox(width: 4),
        ],
      ),
      body: CustomScrollView(
        controller: _scrollController,
        slivers: [
          SliverToBoxAdapter(
            child: HeroSection(scrollController: _scrollController),
          ),
          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 24),
            sliver: SliverToBoxAdapter(
              child: _AboutSection(),
            ),
          ),
          SliverToBoxAdapter(
            child: Container(
              width: double.infinity,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: isDark
                      ? const [Color(0xFF0B1120), Color(0xFF111936)]
                      : const [Color(0xFFF8FAFC), Color(0xFFEEF2FF)],
                ),
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 48, horizontal: 16),
                child: Center(
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 1000),
                    child: ProjectsSection(projects: featuredProjects),
                  ),
                ),
              ),
            ),
          ),
          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
            sliver: SliverToBoxAdapter(
              child: Center(
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 1000),
                  child: SkillsSection(categories: skillCategories),
                ),
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: Container(
              width: double.infinity,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: isDark
                      ? const [Color(0xFF0B1120), Color(0xFF111936)]
                      : const [Color(0xFFF1F5F9), Color(0xFFE0E7FF)],
                ),
              ),
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 48, horizontal: 16),
                child: Center(
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 1000),
                    child: TestimonialsSection(items: testimonials),
                  ),
                ),
              ),
            ),
          ),
          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 32),
            sliver: SliverToBoxAdapter(
              child: ContactSection(scrollController: _scrollController),
            ),
          ),
          SliverToBoxAdapter(
            child: Container(
              width: double.infinity,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: isDark
                      ? const [Color(0xFF0B1120), Color(0xFF0F172A)]
                      : const [Color(0xFFE2E8F0), Color(0xFFF8FAFC)],
                ),
              ),
              child: const FooterSection(),
            ),
          ),
        ],
      ),
    );
  }
}

class _AboutSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

  const String lightImage = 'assets/images/Generated Image October 21, 2025 - 2_23PM.png';
  const String darkImage = 'assets/images/Generated Image October 21, 2025 - 10_46PM (1).png';
    final profile = theme.brightness == Brightness.dark ? darkImage : lightImage;

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
        padding: const EdgeInsets.all(28),
        child: LayoutBuilder(
          builder: (context, constraints) {
            final isWide = constraints.maxWidth >= 860;
            final infoSection = Column(
              crossAxisAlignment:
                  isWide ? CrossAxisAlignment.start : CrossAxisAlignment.center,
              children: [
                Text(
                  'About Me',
                  style: theme.textTheme.titleLarge?.copyWith(fontWeight: FontWeight.w800),
                ),
                const SizedBox(height: 12),
                Text(
                  'With over 3 years of experience, I create intelligent applications that bridge the gap between cutting-edge AI and exceptional user experiences.',
                  textAlign: isWide ? TextAlign.start : TextAlign.center,
                  style: theme.textTheme.bodyLarge?.copyWith(height: 1.6),
                ),
                const SizedBox(height: 12),
                Text(
                  'From Flutter and React frontends to FastAPI backends and AI agents, I partner with teams across healthcare, fintech, and automation to ship products that scale.',
                  textAlign: isWide ? TextAlign.start : TextAlign.center,
                  style: theme.textTheme.bodyLarge?.copyWith(height: 1.6),
                ),
                const SizedBox(height: 12),
                Text(
                  'Every engagement is an opportunity to solve complex problems with thoughtful design, rigorous engineering, and measurable impact.',
                  textAlign: isWide ? TextAlign.start : TextAlign.center,
                  style: theme.textTheme.bodyLarge?.copyWith(height: 1.6),
                ),
                const SizedBox(height: 18),
                Align(
                  alignment: isWide ? Alignment.centerLeft : Alignment.center,
                  child: Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    alignment: WrapAlignment.center,
                    children: [
                      for (final item in expertiseChips)
                        Chip(
                          backgroundColor: theme.colorScheme.secondary.withValues(alpha: 0.12),
                          label: Text(item),
                          labelStyle: theme.textTheme.bodyMedium?.copyWith(
                            color: theme.colorScheme.secondary,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                    ],
                  ),
                ),
                const SizedBox(height: 18),
                Align(
                  alignment: isWide ? Alignment.centerLeft : Alignment.center,
                  child: FilledButton.icon(
                    onPressed: () => launchUrl(
                      Uri.parse('https://dagimbekele.com/resume.pdf'),
                      mode: LaunchMode.externalApplication,
                    ),
                    icon: const Icon(Icons.file_download_outlined),
                    label: const Text('Download Resume'),
                  ),
                ),
              ],
            );

            final imageSection = AspectRatio(
              aspectRatio: isWide ? 3 / 4 : 4 / 5,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(24),
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    Image.asset(
                      profile,
                      fit: BoxFit.cover,
                    ),
                    Positioned(
                      bottom: 16,
                      right: 16,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(999),
                          color: theme.colorScheme.primary.withValues(alpha: 0.18),
                        ),
                        child: Text(
                          'Crafting experiences',
                          style: theme.textTheme.labelSmall?.copyWith(
                            color: Colors.white,
                            fontWeight: FontWeight.w700,
                            letterSpacing: 1,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            );

            if (isWide) {
              return Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Expanded(flex: 3, child: infoSection),
                  const SizedBox(width: 24),
                  Expanded(flex: 2, child: imageSection),
                ],
              );
            }

            return Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                infoSection,
                const SizedBox(height: 24),
                imageSection,
              ],
            );
          },
        ),
      ),
    );
  }
}

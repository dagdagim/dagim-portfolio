import 'package:flutter/material.dart';

import '../data/content.dart';
import '../theme/app_theme.dart';

class SkillsSection extends StatelessWidget {
  const SkillsSection({super.key, required this.categories});

  final List<SkillCategory> categories;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Skills & Expertise',
          style: theme.textTheme.titleLarge?.copyWith(fontWeight: FontWeight.w800),
        ),
        const SizedBox(height: 8),
        Text(
          'A curated stack of frameworks and AI capabilities powering intelligent, scalable products.',
          style: theme.textTheme.bodyMedium?.copyWith(
            color: theme.textTheme.bodyMedium?.color?.withValues(alpha: 0.8),
            height: 1.6,
          ),
        ),
        const SizedBox(height: 24),
        LayoutBuilder(
          builder: (context, constraints) {
            final double maxWidth = constraints.maxWidth;
            final int columnCount = maxWidth >= 960
                ? 3
                : maxWidth >= 720
                    ? 2
                    : 1;
            const double spacing = 18;
            final double childWidth = columnCount == 1
                ? maxWidth
                : (maxWidth - spacing * (columnCount - 1)) / columnCount;

            return Wrap(
              spacing: spacing,
              runSpacing: spacing,
              children: [
                for (final entry in categories.asMap().entries)
                  SizedBox(
                    width: childWidth,
                    child: _SkillGroupCard(index: entry.key, group: entry.value),
                  ),
              ],
            );
          },
        ),
      ],
    );
  }
}

class _SkillGroupCard extends StatelessWidget {
  const _SkillGroupCard({required this.index, required this.group});

  final int index;
  final SkillCategory group;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    const Color accent = AppTheme.accentEnd;

    return Container(
      margin: const EdgeInsets.only(bottom: 20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(24),
        color: theme.colorScheme.surface,
        boxShadow: [
          BoxShadow(
            color: theme.colorScheme.primary.withValues(alpha: 0.08 + index * 0.02),
            blurRadius: 28,
            offset: const Offset(0, 16),
          ),
        ],
      ),
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(18),
                    gradient: const LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [AppTheme.accentStart, AppTheme.accentEnd],
                    ),
                  ),
                  child: const Icon(Icons.auto_awesome, color: Colors.white),
                ),
                const SizedBox(width: 16),
                _GradientTitle(text: group.title),
              ],
            ),
            const SizedBox(height: 16),
            Text(
              group.description,
              style: theme.textTheme.bodyMedium?.copyWith(height: 1.6),
            ),
            const SizedBox(height: 16),
            Wrap(
              spacing: 10,
              runSpacing: 10,
              children: [
                for (final skill in group.skills)
                  Chip(
                    backgroundColor: accent.withValues(alpha: 0.14),
                    label: Text(skill),
                  ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class _GradientTitle extends StatelessWidget {
  const _GradientTitle({required this.text});

  final String text;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return ShaderMask(
      shaderCallback: (bounds) {
        return const LinearGradient(
          colors: [AppTheme.accentStart, AppTheme.accentEnd],
        ).createShader(Rect.fromLTWH(0, 0, bounds.width, bounds.height));
      },
      child: Text(
        text,
        style: theme.textTheme.titleMedium?.copyWith(
          fontWeight: FontWeight.w700,
          color: Colors.white,
        ),
      ),
    );
  }
}

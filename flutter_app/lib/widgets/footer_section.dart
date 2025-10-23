import 'package:flutter/material.dart';

import '../theme/app_theme.dart';

class FooterSection extends StatelessWidget {
  const FooterSection({super.key});

  static const String _logoPath =
      'assets/images/Generated Image October 21, 2025 - 11_33PM.png';

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final year = DateTime.now().year;
    final isDark = theme.brightness == Brightness.dark;

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 32),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 960),
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(28),
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: isDark
                    ? const [Color(0xFF0F172A), Color(0xFF020617)]
                    : const [Color(0xFFF8FAFC), Color(0xFFEFF2FF)],
              ),
              border: Border.all(
                color: isDark
                    ? Colors.white.withValues(alpha: 0.06)
                    : Colors.black.withValues(alpha: 0.04),
              ),
              boxShadow: [
                BoxShadow(
                  color: theme.colorScheme.primary.withValues(alpha: 0.12),
                  blurRadius: 36,
                  offset: const Offset(0, 22),
                ),
              ],
            ),
            foregroundDecoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(28)),
              gradient: RadialGradient(
                center: Alignment(-0.6, -0.8),
                radius: 1.1,
                colors: [
                  Color(0x4C818CF8),
                  Colors.transparent,
                ],
              ),
            ),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 28),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  LayoutBuilder(
                    builder: (context, constraints) {
                      final isCompact = constraints.maxWidth < 420;
                      final spacing = isCompact ? 12.0 : 16.0;

                      return Flex(
                        direction: isCompact ? Axis.vertical : Axis.horizontal,
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Container(
                            width: 64,
                            height: 64,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: LinearGradient(
                                colors: isDark
                                    ? const [Color(0xFF1E293B), Color(0xFF0B1120)]
                                    : const [Color(0xFFE0E7FF), Color(0xFFCBD5F5)],
                              ),
                              boxShadow: [
                                BoxShadow(
                                  color: AppTheme.accentEnd.withValues(alpha: 0.28),
                                  blurRadius: 26,
                                  offset: const Offset(0, 18),
                                ),
                              ],
                            ),
                            clipBehavior: Clip.antiAlias,
                            child: Image.asset(
                              _logoPath,
                              fit: BoxFit.cover,
                              errorBuilder: (context, error, stackTrace) => const DecoratedBox(
                                decoration: BoxDecoration(
                                  gradient: LinearGradient(
                                    colors: [AppTheme.accentStart, AppTheme.accentEnd],
                                  ),
                                ),
                                child: Icon(Icons.auto_awesome, color: Colors.white),
                              ),
                            ),
                          ),
                          SizedBox(
                            width: isCompact ? 0 : spacing,
                            height: isCompact ? spacing : 0,
                          ),
                          Column(
                            mainAxisSize: MainAxisSize.min,
                            crossAxisAlignment: isCompact
                                ? CrossAxisAlignment.center
                                : CrossAxisAlignment.start,
                            children: [
                              Align(
                                alignment: isCompact
                                    ? Alignment.center
                                    : Alignment.centerLeft,
                                child: _GradientTitle(
                                  text: 'Dagim Bekele',
                                  style: theme.textTheme.titleLarge,
                                  textAlign:
                                      isCompact ? TextAlign.center : TextAlign.start,
                                ),
                              ),
                              const SizedBox(height: 4),
                              Text(
                                'Senior Mobile App, Website & AI Engineer',
                                textAlign:
                                    isCompact ? TextAlign.center : TextAlign.start,
                                style: theme.textTheme.bodyMedium?.copyWith(
                                  color: theme.textTheme.bodyMedium?.color
                                      ?.withValues(alpha: 0.75),
                                ),
                              ),
                            ],
                          ),
                        ],
                      );
                    },
                  ),
                  const SizedBox(height: 20),
                  Text(
                    '© $year Dagim Bekele. All rights reserved.',
                    textAlign: TextAlign.center,
                    style: theme.textTheme.bodySmall?.copyWith(height: 1.6),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Crafted with Flutter, tailored from the dagim-portfolio web experience.',
                    textAlign: TextAlign.center,
                    style: theme.textTheme.bodySmall?.copyWith(
                      color: theme.textTheme.bodySmall?.color?.withValues(alpha: 0.75),
                      height: 1.6,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _GradientTitle extends StatelessWidget {
  const _GradientTitle({
    required this.text,
    required this.style,
    this.textAlign = TextAlign.start,
  });

  final String text;
  final TextStyle? style;
  final TextAlign textAlign;

  @override
  Widget build(BuildContext context) {
    final base = style ?? Theme.of(context).textTheme.titleLarge;
    return ShaderMask(
      shaderCallback: (bounds) => const LinearGradient(
        colors: [AppTheme.accentStart, AppTheme.accentEnd],
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
      ).createShader(Rect.fromLTWH(0, 0, bounds.width, bounds.height)),
      blendMode: BlendMode.srcIn,
      child: Text(
        text,
        style: base?.copyWith(color: Colors.white, fontWeight: FontWeight.w800),
        textAlign: textAlign,
      ),
    );
  }
}
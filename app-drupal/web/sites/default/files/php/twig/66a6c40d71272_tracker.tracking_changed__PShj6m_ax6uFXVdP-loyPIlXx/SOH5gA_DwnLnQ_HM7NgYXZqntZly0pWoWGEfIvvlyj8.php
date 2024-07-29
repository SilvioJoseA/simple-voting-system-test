<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @help_topics/tracker.tracking_changed_content.html.twig */
class __TwigTemplate_b187dbe07296b0da568bcb2383082e9d extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension(SandboxExtension::class);
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 7
        $context["recent_link_text"] = ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            // line 8
            yield t("Recent content", array());
            return; yield '';
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 10
        $context["recent_link"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\help\HelpTwigExtension']->getRouteLink($this->sandbox->ensureToStringAllowed(($context["recent_link_text"] ?? null), 10, $this->source), "tracker.page"));
        // line 11
        yield "<h2>";
        yield t("What displays of recently-updated content are available?", array());
        yield "</h2>
<p>";
        // line 12
        yield t("Assuming that you have the core Activity Tracker module installed, these pages that show recently-updated content are available:", array());
        yield "</p>
<ul>
  <li>";
        // line 14
        yield t("@recent_link: Shows the content that has been most recently added, updated, or commented on.", array("@recent_link" => ($context["recent_link"] ?? null), ));
        yield "</li>
  <li>";
        // line 15
        yield t("The <em>My recent content</em> tab on the <em>Recent content</em> page (for logged-in users) limits the list to content created or commented on by the user viewing the page.", array());
        yield "</li>
  <li>";
        // line 16
        yield t("The <em>Activity</em> tab on a user profile shows the same list for the user whose profile is being viewed.", array());
        yield "</li>
</ul>";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "@help_topics/tracker.tracking_changed_content.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  66 => 16,  62 => 15,  58 => 14,  53 => 12,  48 => 11,  46 => 10,  42 => 8,  40 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "@help_topics/tracker.tracking_changed_content.html.twig", "C:\\xampp1\\htdocs\\appChallenge\\app-drupal\\web\\core\\modules\\tracker\\help_topics\\tracker.tracking_changed_content.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 7, "trans" => 8);
        static $filters = array("escape" => 14);
        static $functions = array("render_var" => 10, "help_route_link" => 10);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'trans'],
                ['escape'],
                ['render_var', 'help_route_link'],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
